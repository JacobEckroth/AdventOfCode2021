


def main():
    basicDrive()
    return 0

def splitLineFunc(line):
    splitLine = line.split()
    newTuple = (splitLine[0],int(splitLine[1]))
    return newTuple

def basicDrive():
    horPos = depth = aim=0
    
    with open('input') as file:
        lines = file.readlines()
        splitLines = list(map(splitLineFunc,lines))
        print(splitLines)
        for splitLine in splitLines:
            if(len(splitLine) == 0):
                continue
            if(splitLine[0]) =="up":
                aim -= splitLine[1]
            elif(splitLine[0]) == "down":
                aim += splitLine[1]
            elif(splitLine[0]) == "forward":
                horPos += splitLine[1]
                depth += aim * splitLine[1]
            else:
                continue
    print("Depth: " + str(depth) + " horPos: " + str(horPos))
    print(depth*horPos)

            


if __name__ == "__main__":
    main()