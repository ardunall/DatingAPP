using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<AppUser>().HasData(
            new AppUser { Id = "arda-id", DisplayName = "arda", Email = "arda@test.com"},
            new AppUser { Id = "emre-id", DisplayName = "emre", Email = "emre@test.com"},
            new AppUser { Id = "batu-id", DisplayName = "ayse", Email = "ayse@test.comz"}
        );
    }
}
