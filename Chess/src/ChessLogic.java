
public class ChessLogic {

	public boolean hasAPiece(Piece p) {
		if (p != null)
			return true;
		else
			return false;
	}

	public static Piece[][] changeBoard(Piece[][] cb, Position from, Position to) {
		if (canMove(cb, from, to)) {
			cb[to.getRow()][to.getCol()] = cb[from.getRow()][from.getCol()];
			cb[from.getRow()][from.getCol()] = null;
		}
		kingInCheck(cb);
		return cb;

	}

	public static boolean canMove(Piece[][] cb, Position from, Position to) {
		boolean result = false;
		if (cb[from.getRow()][from.getCol()] == null) {
			System.out.println("There is no piece in the position you want to move from");
			return false;
		}
		if ((cb[to.getRow()][to.getCol()] != null)
				&& (cb[to.getRow()][to.getCol()].color == cb[from.getRow()][from.getCol()].color)) {
			System.out.println("There is already a piece where you are trying to move");
			return false;
		}
		if (validMove(cb, from, to)) {
			result = true;
		}
		else {
			System.out.println(toString(cb[from.getRow()][from.getCol()]));
			System.out.println("You are not allowed to move there!");
		}
		return result;
	}

	public static boolean validMove(Piece[][] cb, Position from, Position to) {
		boolean result = false;
		int horiDiff = (Math.abs(to.getCol() - from.getCol()));
		int vertDiff = (Math.abs(to.getRow() - from.getRow()));
		if(cb[from.getRow()][from.getCol()]!=null) {
			switch (cb[from.getRow()][from.getCol()].type) {
			case Pawn:{
				result = ((horiDiff == 0) && (vertDiff == 1));
				break;}
			case Rook:{
				result = ((horiDiff == 0) || (vertDiff == 0));
				break;}
			case Knight:{
				result = (horiDiff * vertDiff == 2);
				break;}
			case Bishop:{
				result = (horiDiff == vertDiff);
				break;}
			case Queen:{
				result = ((horiDiff == vertDiff) || (horiDiff == 0) || (vertDiff == 0));
				break;
			}	
			case King:{
				result = (((horiDiff == 0) && (vertDiff == 1)) || ((horiDiff == 1) && (vertDiff == 1))
						|| ((horiDiff == 1) && (vertDiff == 0)));
				break;}
			}
		}
		return result;
	}
	public static void kingInCheck(Piece[][] cb) {
		for(int r=0;r<=7;r++) {
			for(int c=0;c<=7;c++) {
					if((cb[r][c]!=null)&&(cb[r][c].type==PieceType.King)) {
							Position pk= new Position(c,r);
							if(check(cb, pk)) {
								if(cb[r][c].color==Color.White) {
									System.out.println("The White King is in check!");
								}
								if(cb[r][c].color==Color.Black) {
									System.out.println("The Black King is in check!");
								}
							}
						}
				}
			}
		}
	public static boolean check(Piece[][] cb, Position pt) {
		boolean result=false;
		Position pf;
		for(int row=0;row<=7;row++) {
			for(int col=0;col<=7;col++) {
				pf= new Position(col,row);
				if((cb[row][col]!=null)&&(cb[row][col].color!=cb[pt.getRow()][pt.getCol()].color)){
					if(validMove(cb,pf,pt)) {
						result=true;
					}
				}
			}
		}
		return result;
	}
	
	public static String toString(Piece p) {
		String result="";
		switch (p.color) {
		case White: {result=result+"White ";break;}
		case Black:{ result=result+"Black ";break;}
		}
		switch (p.type) {
		case Pawn:{
			result=result+ "Pawn ";break;}
		case Rook:{
			result=result+ "Rook ";break;}
		case Knight:{
			result=result+ "Knight ";break;}
		case Bishop:{
			result=result+  "Bishop ";break;}
		case Queen:{
			result=result+ "Queen ";break;}
		case King:{
			result=result+ "King ";break;}
		}
		return result;
	}
	
	//todo: function that returns what squares are in between a piece and a position
}
