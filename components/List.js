class List{
    constructor()
    {
        this.list = []
    }
    getDados = (item) => {
        this.list.push({
            "item": item
        })
    }
}

export default List;