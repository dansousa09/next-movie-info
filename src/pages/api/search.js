import { apiKey, apiBase } from "../../lib/tmdbApi";

const trending = async (req, res) => {
  const response = await fetch(
    `${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.q}`
  );
  const json = await response.json();

  res.status(200).json({
    list: json.results,
  });
};

export default trending;
