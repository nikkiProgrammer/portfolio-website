<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <title>PHP CALCULATOR</title>
    <style type="text/css">
        body {
            background-color: #669999;
            margin-top: 8%;
        }

        #answer 
        {
            background-color: #f4f4f4;
            padding: 30px;
            border-radius: 5px;
            text-align: center;
            font-size: 30px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <h1>PHP CALCULATOR</h1>
                <br>
                <form method="POST">
                    <label> <b>Enter the first value:</b></label>
                    <input type="number" name="num1" placeholder="Enter the first number" class="form-control">
                    <br>
                    <label> <b>Enter the second value:</b></label>
                    <input type="number" name="num2" placeholder="Enter the second number" class="form-control">
                    <br>
                    <label><b>Select an option:</b></label>
                    <select name="operator" class="form-control">
                        <option>NONE</option>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                    </select>
                    <br>
                    <input type="submit" name="submit" value="Calculate" class="btn btn-success">
                    <input type="reset" value="Clear" class="btn btn-danger">
                </form>
                <br>
                <h4><b>The answer is: </b></h4>
                <div id="answer">

                    <?php
                    if (isset($_POST["submit"])) {
                        $answer1 = $_POST["num1"];
                        $answer2 = $_POST["num2"];
                        $sign = $_POST["operator"];

                        switch ($sign) {
                            case "NONE";
                                $alert = "<script>alert('Please select an option!');</script>";
                                echo $alert;
                                break;

                            case "+":
                                echo $answer1 + $answer2;
                                break;

                            case "-":
                                echo $answer1 - $answer2;
                                break;

                            case "*":
                                echo $answer1 * $answer2;
                                break;

                            case "/":
                                echo $answer1 / $answer2;
                                break;
                        }
                    }

                    ?>

                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
</body>

</html>