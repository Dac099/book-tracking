const crypto = require('crypto');

module.exports = class Note{
  constructor(title, text, startPage, endPage){
    this.id = crypto.randomUUID();
    this.title = title;
    this.text = text;
    this.startPage = startPage;
    this.endPage = endPage;
    this.totalWords = this.text.length;
    this.created = new Date(Date.now()).toLocaleDateString();
  }

  updateNote(noteUpdates){
    const { title, text, startPage, endPage } = noteUpdates;
    this.title = title || this.title;
    this.startPage = startPage || this.startPage;
    this.endPage = endPage || this.endPage;

    if(text){
      this.text = text;
      this.totalWords = text.length;
    }

    return this;
  }
}