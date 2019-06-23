import requests
import time

stream_url = 'http://audio12.broadcastify.com/tnbx8smvgcf5w4r.mp3?nocache=6259112&xan=DCJP4HvtwMoXdH9HvtwMJ5vv342DfleDptcoX3dH9H48vtwMJ'

r = requests.get(stream_url, stream=True)


# with open('stream.mp3', 'wb') as f:
#   try:
#     for block in r.iter_content(1024):
#       f.write(block)
#       print('hi')
#   except KeyboardInterrupt:
#     pass

num = 0
seconds = time.time()
while(True):
  with open(str(num) + '.mp3', 'wb') as f:
    try:
      for block in r.iter_content(1024):
        print('hi: ' + str(time.time() - seconds))
        f.write(block)
        if (time.time() - seconds >= 60):
          num += 1
          seconds = time.time()
          break
    except KeyboardInterrupt:
      pass