import { Injectable } from '@angular/core';
import { DatabaseName } from 'src/app/Constants/IndexDB/databaseName';
import { CoverLetterStoreName } from 'src/app/Constants/IndexDB/coverLetterStoreName';
import { CoverLetter } from 'src/app/Models/coverLetter';

@Injectable({
  providedIn: 'root'
})
export class CoverLetterService {

  private database: IDBDatabase;

  constructor() {
  }

  public openDatabase() {
    return new Promise(resolve => {
      if (!window.indexedDB) {
        alert("Danger. Your browser doesn't support IndexDB stable version!");
      }
      let request = indexedDB.open(DatabaseName, 2);

      request.onerror = () => {
        alert("Index db error. " + request.error.message);
      }

      request.onsuccess = () => {
        this.database = request.result;

        return resolve(request.result);
      }

      request.onupgradeneeded = () => {
        this.database = request.result;
        if (!this.database.objectStoreNames.contains(CoverLetterStoreName)) {
          this.database.createObjectStore(CoverLetterStoreName, { keyPath: 'id' });
        }
      }
    });
  }

  public getAllLetters(): IDBRequest {
    let transaction = this.database.transaction(CoverLetterStoreName, "readonly");
    let letterStore = transaction.objectStore(CoverLetterStoreName);
    let request = letterStore.getAll();

    return request;
  }

  public getLetterById(letterKey: number): IDBRequest {
    let transaction = this.database.transaction(CoverLetterStoreName, "readonly");
    let letterStore = transaction.objectStore(CoverLetterStoreName);
    let request = letterStore.get(letterKey);

    return request;
  }

  public addLetter(newLetter: CoverLetter): IDBRequest {
    let transaction = this.database.transaction(CoverLetterStoreName, "readwrite");
    let lettersStore = transaction.objectStore(CoverLetterStoreName);
    let request = lettersStore.add(newLetter);

    return request;
  }

  public deleteLetterById(letterId: number): IDBRequest {
    let transaction = this.database.transaction(CoverLetterStoreName, "readwrite");
    let lettersStore = transaction.objectStore(CoverLetterStoreName);
    let request = lettersStore.delete(letterId);

    return request;
  }

  public updateLetter(letter: CoverLetter): IDBRequest {
    let transaction = this.database.transaction(CoverLetterStoreName, "readwrite");
    let letterStore = transaction.objectStore(CoverLetterStoreName);
    let request = letterStore.put(letter);

    return request;
  }
}
