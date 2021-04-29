using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDo.DataAccess.Entities;

namespace ToDo.DataAccess
{
    public partial class ToDoContext : DbContext
    {
        public ToDoContext(DbContextOptions<ToDoContext> options) : base(options)
        { 
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToDoItem>(entity =>
            {
                entity.Property(e => e.Description).HasMaxLength(2048).IsRequired();
            });
        }

        public DbSet<ToDoItem> ToDoItems { get; set; }
    }
}
