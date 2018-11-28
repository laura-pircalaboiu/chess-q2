import java.util.Scanner;

public class chessMain {
	
	public static void main(String[] args) {
		Board cb = new Board();
		cb.display();
		Scanner userInput= new Scanner(System.in);
		while(true) {
		String move= userInput.nextLine();
		char fromRow=move.charAt(0);
		int fromCol=Integer.parseInt(move.substring(1,2));
		char toRow=move.charAt(3);
		int toCol=Integer.parseInt(move.substring(4,5));
		System.out.println("You are moving: "+fromRow+" "+fromCol+" to "+toRow+" "+toCol);
		Position p1= new Position(fromRow, fromCol);
		Position p2= new Position(toRow, toCol);
		cb.chessBoard= ChessLogic.changeBoard(cb.chessBoard,p1,p2);
		cb.display();
		}
	}

}
