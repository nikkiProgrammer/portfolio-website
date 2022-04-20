<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TABLES</title>
    <style type="text/css">
       body {
            font-weight: bold;
            margin-top: 10%;
            font-family: arial, sans-serif;
            display: grid;
            text-align: center;
            place-items: center;
            background-size: 25%;
            background-repeat:no-repeat ;
            background-image: url("https://i.pinimg.com/originals/aa/f7/f2/aaf7f2bb862a0004acad5bff2b08d927.gif");
        }

        h1 {
            color: #da9100;
            font-weight: bold;
            font-size: 35px;

        }

        .center {
            margin-left: auto;
            margin-right: auto;

        }

        td,
        tr {
            border: 1px solid #fcc200;
            padding: 8px;
        }

        #happy 
        {
            border-radius: 15px;
            background-color:#fcc200 ;
            padding: 10px;
            border-style: none;

        }
    </style>

</head>

<body>

    <h1>The Top 10 Happiest Countries in the World 2022</h1>
    <br>
    <?php
    $countryArray = array(
        array("RANK", "COUNTRY", "POPULATION"),
        array("1", "Finland", "5,554,960"),
        array("2", "Denmark", "5,834,950"),
        array("3", "Switzerland", "8,773,637"),
        array("4", "Iceland", "345,393"),
        array("5", "Netherlands", "17,211,447"),
        array("6", "Norway", "5,511,370"),
        array("7", "Sweden", "10,218,971"),
        array("8", "Luxembourg", "642,371"),
        array("9", "New Zealand", "4,898,203"),
        array("10", "Austria", "9,066,710"),
    );

    echo "<table width='600' cellspacing='0' class='center'>";
    if (isset($_POST["btn"]))
        for ($i = 0; $i < count($countryArray); $i++) {
            echo "<tr>";
            for ($j = 0; $j < count($countryArray[$i]); $j++) {
                echo "<td>" . $countryArray[$i][$j] . "</td>";
            }
            echo "<tr>";
        }
    echo "</table>";
    ?>
    <br>
    <form action="tables.php" method="post">
        <input type="submit" value="Click To View" name="btn" id="happy">
    </form>
</body>

</html>