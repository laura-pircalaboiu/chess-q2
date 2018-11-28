class chessPiece
{
    
    constructor(t, c) //assign type + colour
    {
        this.type = t;
        this.colour = c;
    }

    getType()
    {
        return this.type;
    }

    setType(t)
    {
        this.type = t;
    }

    getColour()
    {
        return this.colour;
    }

    setColour(c)
    {
        this.colour = c;
    }
}