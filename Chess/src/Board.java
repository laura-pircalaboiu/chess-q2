
public class Board {
	
	Piece[][] chessBoard = new Piece[8][8];
	
	PieceType[] order = { PieceType.Rook, PieceType.Knight, PieceType.Bishop, PieceType.Queen, PieceType.King,
			PieceType.Bishop, PieceType.Knight, PieceType.Rook };

	public Board() {
		for (int row = 0; row <= 7; row++) {

			for (int col = 0; col <= 7; col++) {
				chessBoard[row][col]=null;
			}
		}
		// initialize actual pieces
		for (int col = 0; col <= 7; col++) {
			
			chessBoard[1][col]= new Piece(PieceType.Pawn,Color.Black);
			chessBoard[0][col]= new Piece(order[col],Color.Black);

			chessBoard[6][col]= new Piece(PieceType.Pawn,Color.White);
			chessBoard[7][col]= new Piece(order[col],Color.White);
		}

	}

	public void display() {
		for (int row = 0; row <= 7; row++) {

			for (int col = 0; col <= 7; col++) {

				if (chessBoard[row][col]==null) {
					if ((row + col) % 2 == 0)
						System.out.print("   ");
					if ((row + col) % 2 == 1)
						System.out.print(" ##");
				}
				else {
					if (chessBoard[row][col].color == Color.Black) {
						System.out.print(" B");
						printPieceType(chessBoard[row][col]);
					}
					if (chessBoard[row][col].color == Color.White) {
						System.out.print(" W");
						printPieceType(chessBoard[row][col]);
					}
				}
			}
			System.out.print("\n");
		}
	}

	public void printPieceType(Piece P) {
		switch(P.type) {
			case Pawn: System.out.print("P"); break;
			case Rook: System.out.print("R"); break;
			case Knight: System.out.print("H"); break;
			case Bishop: System.out.print("B"); break;
			case Queen: System.out.print("Q"); break;
			case King: System.out.print("K"); break;
		}
	}
	
	
}
