<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <title>CALLREPORT by SAS</title>
    </head>
    
    <body>
    <script>
        const baseUrl = '{{ env('APP_URL') }}';
    </script>
        <div id="app"></div>       
        <script src="{{asset('js/app.js')}}"></script>
    </body>

</html>