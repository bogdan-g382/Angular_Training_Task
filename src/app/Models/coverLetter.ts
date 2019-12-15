export class CoverLetter {
    public id: number;
    public profession: string;
    public name: string;
    public about: string;
    public draft: boolean;

    constructor(id=0,profession="",name="",about="",draft=true){
        this.id=id;
        this.profession=profession;
        this.name=name;
        this.about=about;
        this.draft=draft;
    }
}