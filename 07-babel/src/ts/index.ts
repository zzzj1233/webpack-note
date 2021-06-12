interface Book {
    name: string
    isin: string
    number?: number
}

type Books = Array<Book>

export default function rendBooks(boos: Books, root: HTMLElement): void {

    boos.forEach(book => {
        const ul = document.createElement('ul')
        const name = document.createElement('li')
        name.innerText = book.name
        const isin = document.createElement('li')
        isin.innerText = book.isin

        ul.appendChild(name)
        ul.appendChild(isin)
        if (book.number) {
            const number = document.createElement('li')
            number.innerText = book.number.toString()
            ul.appendChild(number)
        }

        root.appendChild(ul)
    })
}

