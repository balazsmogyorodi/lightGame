import JaterkTer from "./jatekTer.js";

$(function (){
    const aside = $("aside");
    const kezeloFelulet = $("<div> </div>");

    kezeloFelulet.addClass("kezeloFelulet");
    kezeloFelulet.append(`<h2> Fő menű</h2>  <label for="fokozat">nehézségi szint:</label>
        <select id="jatekNehezseg" name="nehezseg">
          <option value="könnyű">Könnyű</option>
          <option value="közepes">Közepes</option>
          <option value="nehéz">Nehéz</option>
        </select> <br>
        <button class="jatekKezdes"> Kezdés</button>`);
    aside.append(kezeloFelulet);
    $(".jatekKezdes").on("click", () => {
        aside.empty();
        new JaterkTer();
    });
  



});