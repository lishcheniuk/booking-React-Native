import { makeAutoObservable } from "mobx";

class SearchState {
  _rooms = { 1: { adult: 2, child: 0 } };
  _selectedDates = { from: null, to: null };

  constructor() {
    makeAutoObservable(this);
  }

  get countRooms() {
    return Object.keys(this._rooms).length;
  }

  get getDates() {
    return this._selectedDates;
  }

  get allPlaces() {
    return Object.entries(this._rooms).reduce((acc, room) => {
      return (acc += room[1].adult + room[1].child);
    }, 0);
  }

  get roomPlaces() {
    return this._rooms;
  }

  setRooms(rooms) {
    this._rooms = rooms;
  }

  selectDates(dates) {
    this._selectedDates = dates;
  }
}

export default new SearchState();
