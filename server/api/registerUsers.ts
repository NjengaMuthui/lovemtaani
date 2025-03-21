import { IncomingMessage, ServerResponse } from "http";

export default (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url || "", `http://${req.headers.host}`);
  const queryParams = url.searchParams;

  const name = queryParams.get("name") || "Guest";
  const age = queryParams.get("age") || "unknown";

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({ message: `Hello, ${name}! You are ${age} years old.` })
  );
};
