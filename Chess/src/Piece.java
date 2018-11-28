
public class Piece {
	
	Color color;
	PieceType type;
	
	public Piece(PieceType p, Color c) {
		this.type=p;
		this.color=c;
	}
	public PieceType getType() {
		return type;
	}
	public void setType(PieceType type) {
		this.type = type;
	}
	public Color getColor() {
		return color;
	}
	public void setColor(Color color) {
		this.color = color;
	}
	

}