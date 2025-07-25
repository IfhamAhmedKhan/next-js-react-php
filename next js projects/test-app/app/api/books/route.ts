import books from "../db";

export async function GET(request: Request) {
    return Response.json(books);
}

export async function POST(request: Request) {
    const book = await request.json();
    books.push(book);
    return Response.json(books);
}