<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Page</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])


</head>
<body>

    <form method="POST" action="/login">
      @csrf
        <div class="mt-4 ">
          <label for="email" class="form-label">Email address</label>
          <input type="text" class="form-control" id="email" aria-describedby="emailHelp" name="email">
          @if ($errors->has('email'))
           <span class="error-message text-danger">*{{$errors -> first('email')}}</span>
          @endif
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" >
          @if ($errors -> has('password'))
            <span class="error-message text-danger">*{{$errors -> first('password')}}</span>
          @endif
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
</body>
</html>