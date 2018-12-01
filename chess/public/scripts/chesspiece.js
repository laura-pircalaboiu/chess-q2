class chessPiece
{
    //assign type + colour
    constructor(t, c) 
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