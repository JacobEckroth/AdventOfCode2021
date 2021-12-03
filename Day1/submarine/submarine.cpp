
#include <iostream>
#include <fstream>
#include <string>

int slidingWindow();

int main()
{
    std::cout << slidingWindow() << std::endl;
}

int basicCount()
{
    std::string lineText;
    std::ifstream file("input");

    getline(file, lineText);
    int count = 0;
    int prev = std::stoi(lineText);
    while (getline(file, lineText))
    {

        int newVal = std::stoi(lineText);

        if (newVal > prev)
        {
            count++;
        }
        prev = newVal;
    }
    file.close();

    return count;
}

typedef unsigned long long ull;
int slidingWindow()
{
    int arr[2000];
    int index = 0;
    std::string lineText;
    std::ifstream file("input");
    int currentThreeCount = 0;
    int count = 0;
    while (getline(file, lineText)){
        arr[index] = stoi(lineText);
        if(index < 3){
            currentThreeCount += arr[index];
            ++index;
            continue;
        }
        if(arr[index] > arr[index-3]){
        
           
            ++count;
        }
        currentThreeCount += arr[index] - arr[index-3];
        ++index;  

    }
    file.close();

    return count;

}