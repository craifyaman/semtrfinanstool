using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SemTrFinance
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Data.Entity.ModelConfiguration.Conventions;
    using SemTrFinance.Migrations;
    using SemTrFinance.Models;

    public partial class Db : DbContext
    {
       
        public virtual DbSet<Personel> Personel { get; set; }
        public virtual DbSet<PersonelTip> PersonelTip { get; set; }

        public virtual DbSet<Departman> Departman { get; set; }

        public virtual DbSet<PersonelKisitlamaRelation> PersonelKisitlamaRelation { get; set; }
        public virtual DbSet<Kisitlama> Kisitlama { get; set; }
        public virtual DbSet<KisitlamaControllerAction> KisitlamaControllerAction { get; set; }
        
        public virtual DbSet<ArayuzKisitlama> ArayuzKisitlama { get; set; }
        public virtual DbSet<PersonelArayuzKisitlama> PersonelArayuzKisitlama { get; set; }


        public Db() : base("name=Model1")
        {
            Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<Db, Configuration>("Model1"));
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

        }

        public void Update<T>(T entity, params string[] exlude) where T : class
        {
            var entry = Entry<T>(entity);
            entry.State = EntityState.Modified;
            if (exlude != null)
            {
                foreach (var name in exlude)
                {
                    if (string.IsNullOrEmpty(name)) continue;
                    entry.Property(name.Trim()).IsModified = false;
                }
            }
            SaveChanges();
        }
        public void Update<T>(T entity, List<string> include) where T : class
        {
            
            var entry = Entry<T>(entity);
            entry.State = EntityState.Modified;
            if (include.Count > 0)
            {
                foreach (var name in entry.CurrentValues.PropertyNames)
                {
                    if (include.Contains(name))
                    {
                        entry.Property(name.Trim()).IsModified = true;
                    }
                    else
                    {
                        entry.Property(name.Trim()).IsModified = false;
                    }

                }
            }
        }
        public void Insert<T>(T entity) where T : class
        {
            Set<T>().Add(entity);
            SaveChanges();
        }
        public void Delete<T>(T entity) where T : class
        {
            if (entity != null)
            {
                Set<T>().Remove(entity);
                SaveChanges();
            }
        }
    }


}