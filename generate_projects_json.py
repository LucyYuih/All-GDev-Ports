import os
import json
import re
import unicodedata

def slugify(value):
    """
    Converte uma string para um formato seguro para URL (slug).
    Ex: 'Alice_ Mad & Hopeless' -> 'alice-mad-hopeless'
    """
    # Remove acentos e caracteres especiais
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    # Substitui caracteres não-alfanuméricos (exceto hífens) por hífens
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    # Substitui espaços e hífens múltiplos por um único hífen
    value = re.sub(r'[-\s]+', '-', value)
    return value

def format_project_name(folder_name):
    """
    Formata o nome da pasta (slug) para um nome de projeto legível.
    Ex: 'alice-mad-hopeless' -> 'Alice Mad Hopeless'
    """
    return ' '.join(word.capitalize() for word in folder_name.split('-'))

def rename_and_generate():
    """
    Escaneia o diretório atual, renomeia as pastas de projetos para slugs
    e gera o arquivo projects.json.
    """
    projects = []
    
    # Diretórios a serem ignorados
    ignore_list = ['.git', '__pycache__', 'node_modules', 'venv', 'rename_and_generate.py', 'projects.json']
    
    # Obtém todos os itens no diretório atual
    for item in os.listdir('.'):
        
        # Verifica se é um diretório e não está na lista de ignorados
        if os.path.isdir(item) and item not in ignore_list:
            
            # Caminho completo para o possível projeto
            project_path = os.path.join(os.getcwd(), item)
            
            # Verifica se o diretório contém o arquivo index.html (indicador de projeto GDevelop)
            index_file = os.path.join(project_path, 'index.html')
            
            if os.path.exists(index_file):
                
                # Gera o novo nome da pasta (slug)
                new_folder_name = slugify(item)
                
                # Renomeia a pasta se o nome for diferente
                if item != new_folder_name:
                    try:
                        os.rename(item, new_folder_name)
                        print(f"Renomeado: '{item}' -> '{new_folder_name}'")
                    except OSError as e:
                        print(f"Erro ao renomear a pasta '{item}': {e}")
                        continue # Pula para o próximo item em caso de erro
                
                # Verifica se a imagem do ícone existe no novo local
                icon_file = os.path.join(new_folder_name, 'android-icon-192.png')
                has_icon = os.path.exists(icon_file)
                
                # Adiciona o projeto à lista
                projects.append({
                    'name': format_project_name(new_folder_name),
                    'folder': new_folder_name,
                    'has_icon': has_icon
                })

    # Estrutura final do JSON
    data = {
        'projects': projects
    }
    
    # Escreve o arquivo projects.json
    try:
        with open('projects.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"\nSucesso! O arquivo 'projects.json' foi gerado com {len(projects)} projetos.")
        
        if len(projects) == 0:
            print("Aviso: Nenhuma pasta de projeto válida foi encontrada (pastas com 'index.html' dentro).")
            
    except Exception as e:
        print(f"Erro ao escrever o arquivo projects.json: {e}")

if __name__ == '__main__':
    rename_and_generate()
