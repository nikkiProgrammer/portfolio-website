<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Numbers</title>
    <style type="text/css">
        body {
            margin-top: 20%;
            background-size: cover;
            background-image: url("https://thumbs.gfycat.com/AgreeableBackArcticwolf-size_restricted.gif");
        }

        h1 {
            text-align: center;
            color: white;
            text-transform: uppercase;
            font-size: 3em;
            font-family: "helvetica";
        }

        .numbers {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

        }

        .numbers div {
            background: #ff7518;
            padding: 5px;
            margin-left: auto;
            margin-right: auto;
            justify-content: space-around;
            color: #fff;
            font-size: 7em;
            width: 160px;
            height: 160px;
            text-align: center;
            border-radius: 80%;
            
            
        }


        .numbers div {
            animation: changing 3s infinite;
        }

        @keyframes changing {
            from {
                color: #ff7518;
            }

            to {
                color: goldenrod;
            }
        }

        form {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
        }

        form input {
            background: #ff7518;
            color: goldenrod;
            font-size: 2em;
            border-radius: 15px;
            border-style: none;
            opacity: 0.7;
        }
    </style>
</head>

<body>
    <?php

    if (isset($_POST["btn"])) {
        echo '<div class="numbers" >';

        $min = 1;
        $max = 20;
        $arrayNum = array();
        for ($i = 1; $i <= 10; $i++) {

            $num = rand($min, $max);
            if (in_array($num, $arrayNum)) {
                $i--;
            } else {

                $arrayNum[] = $num;
            }
        }

        sort($arrayNum);

        $ranArray = count($arrayNum);

        for ($j = 0; $j < $ranArray; $j++) {
            echo "<div>", ($arrayNum[$j]), "</div>";
        }
        echo '</div>';
    }
    ?>
    <br>
    <br>
    <form action="random.php" method="post">
        <input type="submit" value="Click Me" name="btn">
    </form>
    </div>
</body>

</html>