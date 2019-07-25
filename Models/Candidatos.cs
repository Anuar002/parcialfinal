using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
public class Candidatos
{

public int Id { get; set; }
[JsonProperty("nombreca")]
public string NombreCa { get; set; }
[JsonProperty("Votos")]
public int Votos { get; set; }
}
}