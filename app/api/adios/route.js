export default function GET(req, res) {
  new Response().status(200).json({ hola: 'hola', adios: 3 });
}
