export class Channel {
  id: number;
  name: string;

  selectedChannel: number;

  constructor(){
    this.selectedChannel = 1;
  }

  updateId(idNumber :number) {
    this.id=idNumber;
  }
}
