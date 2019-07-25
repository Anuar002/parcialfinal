using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class Votantes
    {
        public int Id { get; set; }
       
        [JsonProperty("numerodeid")]

        public string NumeroDeId { get; set; }
        public string Nombre {get;set;}
        public string Apellido {get;set;}
         [JsonProperty("candidato")]
        public Candidatos Candidatos {get;set;} 
         [JsonProperty("IdCandidatos")]
       
        public int IdCandidatos {get;set;} 
        
    }
}