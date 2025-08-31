// 간단한 데모 - 시각적으로 이해하기

// 히스토그램 시각화
function visualizeHistogram(heights) {
    console.log("\n히스토그램 시각화:");
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
    console.log("  heights: [" + heights.join(", ") + "]");
}

// 상세한 설명과 함께 실행
function largestRectangleAreaWithExplanation(heights) {
    const stack = [];
    let maxArea = 0;
    
    console.log("\n=== 알고리즘 실행 과정 ===");
    console.log("초기 heights:", heights);
    
    const originalLength = heights.length;
    heights.push(0); // 마지막 처리를 위해 0 추가
    
    for (let i = 0; i < heights.length; i++) {
        if (i < originalLength) {
            console.log(`\n📍 Step ${i}: 현재 막대 = heights[${i}] = ${heights[i]}`);
        } else {
            console.log(`\n📍 마지막 처리 (추가한 0)`);
        }
        console.log(`   스택 상태: [${stack.map(idx => `${idx}(h=${heights[idx]})`).join(", ")}]`);
        
        let calculated = false;
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            calculated = true;
            const heightIndex = stack.pop();
            const h = heights[heightIndex];
            
            const w = stack.length === 0 
                ? i 
                : i - stack[stack.length - 1] - 1;
            
            const area = h * w;
            
            console.log(`   🔸 계산: 막대[${heightIndex}]`);
            console.log(`      - 높이: ${h}`);
            console.log(`      - 너비: ${w} ${stack.length === 0 ? "(왼쪽 끝까지)" : `(${stack[stack.length - 1] + 1}부터 ${i - 1}까지)`}`);
            console.log(`      - 넓이: ${h} × ${w} = ${area}`);
            
            if (area > maxArea) {
                maxArea = area;
                console.log(`      ✨ 새로운 최대값!`);
            }
        }
        
        if (!calculated && i < originalLength) {
            console.log(`   → 계산 없음 (증가하는 상태 유지)`);
        }
        
        if (i < originalLength) {
            stack.push(i);
            console.log(`   스택에 추가: ${i}`);
        }
    }
    
    heights.pop(); // 추가했던 0 제거
    console.log(`\n✅ 최종 결과: 최대 넓이 = ${maxArea}`);
    return maxArea;
}

// 예시 실행
console.log("=" .repeat(60));
console.log("예시 1: 간단한 경우");
console.log("=" .repeat(60));

const example1 = [2, 1, 2];
visualizeHistogram(example1);
largestRectangleAreaWithExplanation([...example1]);

console.log("\n\n" + "=" .repeat(60));
console.log("예시 2: 복잡한 경우");
console.log("=" .repeat(60));

const example2 = [2, 1, 5, 6, 2, 3];
visualizeHistogram(example2);
largestRectangleAreaWithExplanation([...example2]);

console.log("\n\n" + "=" .repeat(60));
console.log("💡 핵심 포인트 정리");
console.log("=" .repeat(60));
console.log("1. 스택에는 '인덱스'를 저장합니다 (높이 X)");
console.log("2. 스택은 항상 '증가하는 순서'를 유지합니다");
console.log("3. 낮은 막대를 만나면 → 이전 높은 막대들의 직사각형 계산");
console.log("4. 너비 = 현재위치 - 스택top - 1 (스택이 비면 전체 너비)");
console.log("5. 마지막에 0을 추가해서 남은 모든 막대 처리");