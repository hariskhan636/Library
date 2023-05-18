import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  bookForm!: FormGroup;
  issuedForm!: FormGroup;
  issueModal = false;
  status = '2';

  books = [
    {
      Id: 5000,
      Title: 'The Great Gatsby',
      Author: 'F. Scott Fitzgerald',
      Category: 'Classic',
      Tags: 'fiction, drama, romance',
      Status: 1,
    },
    {
      Id: 5001,
      Title: 'To Kill a Mockingbird',
      Author: 'Harper Lee',
      Category: 'Classic',
      Tags: 'fiction, drama',
      Status: 0,
    },
    {
      Id: 5002,
      Title: "Harry Potter and the Sorcerer's Stone",
      Author: 'J.K. Rowling',
      Category: 'Fantasy',
      Tags: 'fiction, magic',
      Status: 1,
    },
    {
      Id: 5003,
      Title: 'Pride and Prejudice',
      Author: 'Jane Austen',
      Category: 'Classic',
      Tags: 'fiction, romance',
      Status: 1,
    },
    {
      Id: 5004,
      Title: '1984',
      Author: 'George Orwell',
      Category: 'Dystopian',
      Tags: 'fiction, political',
      Status: 0,
    },
    {
      Id: 5005,
      Title: 'The Catcher in the Rye',
      Author: 'J.D. Salinger',
      Category: 'Classic',
      Tags: 'fiction, coming-of-age',
      Status: 1,
    },
    {
      Id: 5006,
      Title: 'The Hobbit',
      Author: 'J.R.R. Tolkien',
      Category: 'Fantasy',
      Tags: 'fiction, adventure',
      Status: 0,
    },
    {
      Id: 5007,
      Title: 'The Alchemist',
      Author: 'Paulo Coelho',
      Category: 'Fiction',
      Tags: 'philosophical, allegorical',
      Status: 1,
    },
    {
      Id: 5008,
      Title: 'The Hunger Games',
      Author: 'Suzanne Collins',
      Category: 'Dystopian',
      Tags: 'fiction, adventure',
      Status: 1,
    },
    {
      Id: 5009,
      Title: 'The Lord of the Rings',
      Author: 'J.R.R. Tolkien',
      Category: 'Fantasy',
      Tags: 'fiction, adventure',
      Status: 0,
    },
  ];

  issuedBooks: any = [];
  availableBooks: any = [];

  constructor() {}

  ngOnInit() {
    this.availableBooks = this.books.filter((book) => book.Status === 1);

    this.bookForm = new FormGroup({
      Id: new FormControl(),
      Title: new FormControl(),
      Author: new FormControl(),
      Category: new FormControl(),
      Tags: new FormControl(),
      Status: new FormControl(),
    });

    this.issuedForm = new FormGroup({
      Id: new FormControl('', Validators.required),
      UserName: new FormControl('', Validators.required),
      IssueDate: new FormControl(),
    });
  }

  issueBook() {
    this.issuedForm.get('IssueDate')?.setValue(new Date());
    const data = this.issuedForm.getRawValue();
    this.issuedBooks.push(data);
    this.availableBooks = this.availableBooks.filter(
      (book: { Id: any }) => book.Id != data.Id
    );
    this.books.forEach((book) => {
      if (book.Id == data.Id) {
        book.Status = 0;
      }
    });
    this.issueModal = false;
    this.issuedForm.reset();
  }
}
