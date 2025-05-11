# file_read_write.py

def modify_file_content(input_file, output_file):
    try:
        with open(input_file, 'r') as file:
            content = file.read()
            modified_content = content.upper()  # Example: convert to uppercase

        with open(output_file, 'w') as file:
            file.write(modified_content)

        print(f"Modified content written to '{output_file}' successfully.")
    
    except FileNotFoundError:
        print(f"Error: '{input_file}' does not exist.")
    except IOError:
        print("Error: Could not read/write the file.")

# Example usage
modify_file_content('input.txt', 'output.txt')
