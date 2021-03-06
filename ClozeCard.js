function ClozeCard(text, cloze){
    if (!(this instanceof ClozeCard)){
            return new ClozeCard (text, cloze);
        }
    
        this.full = text;
        this.cloze = cloze;
        this.part = " ";

        if (this.full.includes(this.cloze)) {
            this.part = this.full.replace(this.cloze, "...");
        }
        else {
            console.log("Whoops! Invalid Cloze - Try Again.")
        }
    }


module.exports = ClozeCard;