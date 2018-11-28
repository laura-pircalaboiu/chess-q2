
public class Position {
	private int col;
	private int row;
	
	public int getCol() {
		return col;
	}
	public void setCol(int col) {
		this.col = col;
	}
	public int getRow() {
		return row;
	}
	public void setRow(int row) {
		this.row = row;
	}
	
	public Position(char col, int row) {
		switch(col){
			case 'A': this.col=0;break;
			case 'B': this.col=1;break;
			case 'C': this.col=2;break;
			case 'D': this.col=3;break;
			case 'E': this.col=4;break;
			case 'F': this.col=5;break;
			case 'G': this.col=6;break;
			case 'H': this.col=7;break;
		}
		this.row=row;
	}
	public Position(int col, int row) {
		this.col=col;
		this.row=row;
	}
}
