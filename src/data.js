const cards = [
    { question: 'print("Hello, World!")', answer: "Python"},
    { question: 'console.log("Hello, World!");', answer: "JavaScript"},
    { question: 'public class HelloWorld {\n\tpublic static void main(String[] args) {\n\tSystem.out.println("Hello, World!");\n\t}\n}', answer: "Java"},
    { question: 'Console.WriteLine("Hello, World!");', answer: "C#"},
    { question: '#include <iostream> \nint main() {\n\tstd::cout << "Hello, World!" << std::endl;\n\treturn 0;\n}', answer: "C++"},
    { question: '#include <stdio.h> \nint main() {\n\tprintf("Hello, World!");\n\treturn 0; \n}', answer: "C"},
    { question: 'package main\nimport "fmt"\nfunc main() {\n\tfmt.Println("Hello, World!")\n}', answer: "Go"},
    { question: 'fn main() {\n\tprintln!("Hello, World!");\n}', answer: "Rust"},
    { question: 'fun main() {\n\tprintln("Hello, World!")\n}', answer: "Kotlin"},
    { question: '<?php\necho "Hello, World!"; \n?>', answer: "PHP"},
    { question: 'puts "Hello, World!"', answer: "Ruby"},


]

export default cards;
