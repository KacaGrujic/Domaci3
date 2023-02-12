import React from 'react'
import $ from "jquery";
import jQuery from 'jquery';

function Form({ukupanIznos, numProducts}) {
    jQuery(function(){
        var alertDisplayed = false;
        $("#form").on("submit", function(e){
            e.preventDefault();
            if(
                $("#ime").val() &&
                $("#prezime").val() &&
                $("#adresa").val() &&
                $("#email").val()
            ) {
                alert(
                    "Detalji vase korpe:\nIme: "+ $("#ime").val()+
                    "\nPrezime: "+$("#prezime").val()+
                    "\nAdresa: "+$("#adresa").val()+
                    "\nEmail: "+$("#email").val()+
                    "\n\nUkupan iznos: "+ukupanIznos()+" €"
                );
            }else{
                alert("Sva polja su obavezna!!!");
            }
        });
      });
      return (
<div className="for">
        <form action="." id="form">
            <h1 className='nazivForme'>Informacije</h1>
            <div className="formaf">
                <label htmlFor="ime">Ime:</label>
                <input type="text" placeholder='Unesite vase ime...' name='ime' id='ime' />
                <br />
                <br />

                <label htmlFor="prezime">Prezime:</label>
                <input type="text" placeholder='Unesite vase prezime...' name='prezime' id='prezime' />
                <br />
                <br />
                <label htmlFor="adresa">Adresa:</label>
                <input type="text" placeholder='Unesite vasu adresu...' name='adresa' id='adresa' />
                <br />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder='Unesite vas email...' name='email' id='email' />
                <br />
                <br />
                {/* <div className="ukupanBroj">Ukupan broj proizvoda: {numProducts}</div> */}
                
                <div className="ukupnaCena">Ukupan iznos: {ukupanIznos()}</div>
                <br />
             
                <input type="submit" className='submit' value="POSALJI"/>

            </div>
        </form>
        </div>
      )
}

export default Form
