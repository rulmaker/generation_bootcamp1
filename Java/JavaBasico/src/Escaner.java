import java.util.Scanner;

public class Escaner {
	public static void main(String[] args) {
		Scanner escaner = new Scanner(System.in);
		
		
		
		System.out.println("Escribe un n�mero:");		
		int numero = escaner.nextInt();
		
		escaner.next();
		
		System.out.println("Escribe una palabra:");	
		String palabra = escaner.nextLine();
		
		
//		if (numero < 10) {
//			System.out.println("El n�mero es menor a 10");
//		}
//		
		System.out.println(palabra);
		System.out.println(numero);
		escaner.close();
		
	}
}
