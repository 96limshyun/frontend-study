// 간단한 예시로 이해하기: [2, 1, 2]

/**
 * 단계별 실행 과정:
 * 
 * heights = [2, 1, 2]
 * 
 * Step 1: i=0, height=2
 * - 스택이 비었으므로 push(0)
 * - stack = [0]
 * 
 * Step 2: i=1, height=1
 * - 1 < 2 (현재가 더 낮음) → 계산!
 * - pop(): index=0, 높이=2
 * - 너비 = 1 (스택이 비었으므로 i=1)
 * - 넓이 = 2 × 1 = 2
 * - push(1)
 * - stack = [1]
 * 
 * Step 3: i=2, height=2
 * - 2 > 1 → push(2)
 * - stack = [1, 2]
 * 
 * Step 4: i=3, height=0 (추가한 0)
 * - 0 < 2 → 계산!
 * - pop(): index=2, 높이=2
 * - 너비 = 3 - 1 - 1 = 1
 * - 넓이 = 2 × 1 = 2
 * 
 * - 0 < 1 → 계산!
 * - pop(): index=1, 높이=1
 * - 너비 = 3 (스택이 비었으므로)
 * - 넓이 = 1 × 3 = 3 ← 최대값!
 */

// 시각적 표현
function visualizeHistogram(heights: number[]): void {
    console.log("히스토그램 시각화:");
    const maxHeight = Math.max(...heights);
    
    // 위에서부터 아래로 그리기
    for (let h = maxHeight; h >= 1; h--) {
        let line = "";
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] >= h) {
                line += "█ ";
            } else {
                line += "  ";
            }
        }
        console.log(`${h} ${line}`);
    }
    
    // 인덱스 표시
    console.log("  " + heights.map((_, i) => i + " ").join(""));
}

// 디버깅용 상세 버전
export function largestRectangleAreaWithDebug(heights: number[]): number {
    const stack: number[] = [];
    let maxArea = 0;
    
    console.log("초기 heights:", heights);
    heights.push(0); // 마지막 처리를 위해 0 추가
    
    for (let i = 0; i < heights.length; i++) {
        console.log(`\n--- Step ${i}: index=${i}, height=${heights[i]} ---`);
        console.log(`현재 스택: [${stack.join(", ")}]`);
        
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const heightIndex = stack.pop()!;
            const h = heights[heightIndex];
            
            // 너비 계산의 핵심!
            const w = stack.length === 0 
                ? i  // 스택이 비었다 = 왼쪽 끝부터 가능
                : i - stack[stack.length - 1] - 1; // 스택 top 다음부터 현재 전까지
            
            const area = h * w;
            console.log(`  계산: index=${heightIndex}, 높이=${h}, 너비=${w}, 넓이=${area}`);
            
            maxArea = Math.max(maxArea, area);
        }
        
        if (i < heights.length - 1) { // 추가한 0은 push하지 않음
            stack.push(i);
            console.log(`  Push ${i} → 스택: [${stack.join(", ")}]`);
        }
    }
    
    heights.pop(); // 추가했던 0 제거
    console.log(`\n최대 넓이: ${maxArea}`);
    return maxArea;
}

// 테스트
const testCases = [
    [2, 1, 2],
    [2, 1, 5, 6, 2, 3],
    [2, 4],
    [1, 1, 1, 1]
];

testCases.forEach(heights => {
    console.log("\n" + "=".repeat(50));
    visualizeHistogram(heights);
    largestRectangleAreaWithDebug([...heights]);
});