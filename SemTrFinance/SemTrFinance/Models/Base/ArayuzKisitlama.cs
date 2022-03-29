namespace SemTrFinance
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
     
    public partial class ArayuzKisitlama
    {
        public int ArayuzKisitlamaId { get; set; }
        public string Adi { get; set; }
        public string Aciklama { get; set; }
        public string Grup { get; set; }
         
        public virtual ICollection<PersonelArayuzKisitlama> PersonelArayuzKisitlama { get; set; }
    }
}
