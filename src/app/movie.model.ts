export class Movie {
    public id: string;
    public title: string;
    public type: string [];
    public release: number;
    public file: string [];

    constructor(id: string, title: string, type: string [], release: number, file: string [])
    {
        this.id = id;
        this.title = title;
        this.type = type;
        this.release = release;
        this.file = file;
    }
}