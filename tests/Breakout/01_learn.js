const browserName = 'Chrome';
getBrowserVersion();

function getBrowserVersion()
{
    
    if (browserName === 'Chrome') {
        console.log('Chrome Browser');
        var browserVersion = '128.11.67.82';
    }
    else
    {
    console.log('Unsupported Browser');
    }

    console.log(browserVersion);
}