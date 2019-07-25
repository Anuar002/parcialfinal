using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskSharpHTTP.Models;

namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatoController : ControllerBase
    {
        private readonly DbCandidatosContext _context;

         public CandidatoController(DbCandidatosContext context)
        {
             _context = context;

            if (_context.CandidatosList.Count() == 0)
            {
              
                 _context.CandidatosList.Add(new Candidatos {  NombreCa = "Alvaro Uribe", Votos = 5 });
                _context.CandidatosList.Add(new Candidatos {  NombreCa = "Juan  Santos", Votos = 5 });
                _context.CandidatosList.Add(new Candidatos {   NombreCa = "Marlon Moreno", Votos = 5 });
                _context.CandidatosList.Add(new Candidatos {  NombreCa = "Rafael Kenedy", Votos = 5 });
                _context.SaveChanges();
             }
         }
      
     
       

        // GET: api/Task/5
       

        
        [HttpGet("{id}/Votantes")]
        public async Task<ActionResult<Votantes>> GetVotante(int id)
        {
            var votan = await _context.VotantesList.FindAsync(id);

            if (votan == null)
            {
                return NotFound();
            }

            return votan;
        }
         [HttpGet("{id}/Candidatos")]
        public async Task<ActionResult<Votantes>> GetCandidato(int id)
        {
            var candi = await _context.VotantesList.FindAsync(id);

            if (candi  == null)
            {
                return NotFound();
            }

            return candi ;
        }
 
          [HttpGet]
        public async Task<ActionResult<IEnumerable<Votantes>>> GetVotantes()
        {
            return await _context.VotantesList.Include(d=>d.Candidatos).ToListAsync();
        }
       
        
        [HttpPost]
        public async Task<ActionResult<Votantes>> PostVotantes(Votantes newVotante)
        {
            var  votante =  await  _context.VotantesList.FindAsync(newVotante.Id);
            var candidato = await  _context.CandidatosList.FindAsync(newVotante.IdCandidatos);
            if(votante!=null){
               return BadRequest();
            }
            else{
                if(candidato==null){
                    return BadRequest();
                }
                else{
                    if(candidato.Votos==0){
                        return BadRequest();
                    }
                    else{
                        newVotante.Candidatos=candidato;
                          candidato.Votos++;
                          _context.VotantesList.Add(newVotante);
                          await _context.SaveChangesAsync();
                         
                          return CreatedAtAction(nameof(newVotante), new { id = newVotante.Id }, newVotante);
                    }

                }
            }
          
        }
       

    }
}