<?php 

namespace Classes\Trait;

trait Debug
{
    public function dump(...$values)
    {
        ini_set("highlight.comment", "#008000");
        ini_set("highlight.default", "#008000");
        ini_set("highlight.html", "#808080");
        ini_set("highlight.keyword", "#0000BB; font-weight: bold");
        ini_set("highlight.string", "#ffffff");

        $style = /* CSS */
        "background-color : black;
        color : #7fff00;
        width : fit-content;
        padding : 1rem;
        border : 2px solid green;
        margin: 1rem auto;";

        foreach($values as $v)
        {
            echo "<pre style='$style'>".
            highlight_string(
                "<?php \n". var_export($v, true) ."n\?>",
                true
            ).
            
            "</pre>";
        }
    }
    public function dd (...$values)
    {
        $this->dump(...$values);
        die;
    }
}

?>