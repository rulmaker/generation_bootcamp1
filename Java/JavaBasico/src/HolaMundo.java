import java.util.Scanner;

public class HolaMundo {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Escribe un número: ");
		int num = sc.nextInt();
		
		if(num >= 10) {
			System.out.println("Verdadero");
			
		}else {
			System.out.println("falso");
		}
	}
}
