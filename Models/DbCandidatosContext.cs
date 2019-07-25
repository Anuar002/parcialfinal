using Microsoft.EntityFrameworkCore;
namespace TaskSharpHTTP.Models
{
public class DbCandidatosContext : DbContext
{
public DbCandidatosContext(DbContextOptions<DbCandidatosContext> options) :
base(options)
{
}
public DbSet<Candidatos> CandidatosList { get; set; }
public DbSet<Votantes> VotantesList { get; set; }
}
}