// Lộ trình ngữ pháp A1 -> C1, ví dụ gắn với ngành khách sạn - nhà hàng.
// sections: { h: tiêu đề, f: công thức (tùy chọn), p: [ý chính], ex: [[câu Anh, dịch]] }
// mistakes: [[sai, đúng, giải thích]] ; quiz: { q, o: [lựa chọn], a: chỉ số đáp án đúng, e: giải thích }
window.GRAMMAR_LEVELS = [
  { id: 'A', label: 'Sơ cấp', range: 'A1 – A2', color: 'emerald', desc: 'Nền tảng để giao tiếp lịch sự hằng ngày với khách.' },
  { id: 'B', label: 'Trung cấp', range: 'B1 – B2', color: 'sky', desc: 'Báo cáo công việc, giải thích quy trình, xử lý phàn nàn.' },
  { id: 'C', label: 'Nâng cao', range: 'C1', color: 'violet', desc: 'Văn phong trang trọng: email, thư xin lỗi, thông báo chính thức.' },
];

window.GRAMMAR_LESSONS = [
  // ===================== A1 - A2 =====================
  {
    id: 'basic-tenses', level: 'A',
    title: 'Basic Tenses', titleVi: 'Các thì cơ bản: Hiện tại đơn, Hiện tại tiếp diễn, Quá khứ đơn, Tương lai đơn',
    intro: 'Bốn thì nền tảng giúp bạn nói về giờ giấc, quy định khách sạn, việc đang làm, việc đã xảy ra và lời hứa với khách.',
    sections: [
      { h: '1. Hiện tại đơn (Present Simple)', f: 'S + V(s/es)  |  S + do/does + not + V  |  Do/Does + S + V?',
        p: ['Diễn tả sự thật, thói quen, lịch trình, quy định cố định.', 'He/She/It → động từ thêm -s/-es.'],
        ex: [['Breakfast starts at 6:30 a.m.', 'Bữa sáng bắt đầu lúc 6:30.'], ['The hotel offers free Wi-Fi.', 'Khách sạn có Wi-Fi miễn phí.'], ['Does the room have a balcony?', 'Phòng có ban công không?']] },
      { h: '2. Hiện tại tiếp diễn (Present Continuous)', f: 'S + am/is/are + V-ing',
        p: ['Việc đang diễn ra ngay lúc nói hoặc tạm thời.', 'Kế hoạch đã sắp xếp trong tương lai gần.'],
        ex: [['The housekeeper is cleaning your room now.', 'Nhân viên buồng phòng đang dọn phòng của quý khách.'], ['We are renovating the pool this week.', 'Tuần này chúng tôi đang sửa sang hồ bơi.'], ['The guests are checking out at noon.', 'Đoàn khách sẽ trả phòng lúc trưa (đã lên lịch).']] },
      { h: '3. Quá khứ đơn (Past Simple)', f: 'S + V2/V-ed  |  S + did not + V  |  Did + S + V?',
        p: ['Hành động đã xảy ra và kết thúc trong quá khứ, thường có thời gian xác định (yesterday, last night, ago…).'],
        ex: [['A guest left his phone in the restaurant last night.', 'Tối qua một vị khách để quên điện thoại ở nhà hàng.'], ['Did you enjoy your stay?', 'Quý khách có hài lòng với kỳ nghỉ không ạ?']] },
      { h: '4. Tương lai đơn (Future Simple)', f: 'S + will + V',
        p: ['Quyết định tức thì khi đang nói, lời hứa, đề nghị giúp đỡ – rất hay dùng khi phục vụ khách.'],
        ex: [["I'll send a technician right away.", 'Tôi sẽ cử thợ kỹ thuật lên ngay.'], ["I'll bring you some extra towels.", 'Tôi sẽ mang thêm khăn cho quý khách.'], ['Will you need a taxi tomorrow?', 'Ngày mai quý khách có cần taxi không ạ?']] },
    ],
    mistakes: [
      ['The restaurant open at 7.', 'The restaurant opens at 7.', 'Chủ ngữ số ít ở hiện tại đơn → động từ thêm -s.'],
      ['I am work at the front desk.', 'I work at the front desk.', 'Không dùng am/is/are với động từ nguyên mẫu ở hiện tại đơn.'],
      ['He checked out yesterday?', 'Did he check out yesterday?', 'Câu hỏi quá khứ đơn cần trợ động từ Did + V nguyên mẫu.'],
    ],
    quiz: [
      { q: 'Room service ___ available 24 hours a day.', o: ['are', 'is', 'be', 'being'], a: 1, e: 'Room service là danh từ số ít → is.' },
      { q: 'Please wait a moment. The porter ___ your bags now.', o: ['brings', 'brought', 'is bringing', 'bring'], a: 2, e: '"now" → hiện tại tiếp diễn.' },
      { q: 'The AC is broken? Don\'t worry, I ___ someone immediately.', o: ['send', "'ll send", 'sent', 'am sent'], a: 1, e: 'Quyết định tức thì / lời hứa → will.' },
      { q: 'The guest ___ at 10 a.m. yesterday.', o: ['check out', 'checks out', 'checked out', 'will check out'], a: 2, e: '"yesterday" → quá khứ đơn.' },
    ],
  },
  {
    id: 'polite', level: 'A',
    title: 'Imperatives & Polite Requests', titleVi: 'Câu mệnh lệnh & Cấu trúc lịch sự',
    intro: 'Trong ngành dịch vụ, cách nói quan trọng không kém nội dung. Câu mệnh lệnh trần trụi dễ gây cảm giác thô lỗ – hãy "làm mềm" câu.',
    sections: [
      { h: '1. Câu mệnh lệnh (Imperatives)', f: 'V nguyên mẫu …  |  Don\'t + V …  |  Please + V …',
        p: ['Dùng khi hướng dẫn, chỉ đường, cảnh báo. Nên thêm please và giọng nhẹ nhàng.'],
        ex: [['Please sign here.', 'Vui lòng ký vào đây.'], ['Take the lift to the 5th floor and turn left.', 'Đi thang máy lên tầng 5 rồi rẽ trái.'], ["Please don't smoke in the room.", 'Vui lòng không hút thuốc trong phòng.']] },
      { h: '2. Nhờ khách làm gì (Requests)', f: 'Could you (please) + V …?  |  Would you mind + V-ing …?',
        p: ['Could/Would lịch sự hơn Can.', 'Would you mind + V-ing là mức rất lịch sự.'],
        ex: [['Could you please fill in this form?', 'Quý khách vui lòng điền phiếu này được không ạ?'], ['Would you mind waiting a few minutes?', 'Quý khách có phiền đợi vài phút không ạ?']] },
      { h: '3. Xin phép (Asking permission)', f: 'May I + V …?  |  Could I + V …?',
        p: ['May I… là chuẩn mực trang trọng khi phục vụ.'],
        ex: [['May I see your passport, please?', 'Tôi có thể xem hộ chiếu của quý khách không ạ?'], ['May I take your order?', 'Tôi ghi món cho quý khách nhé?']] },
      { h: '4. Mời / đề nghị (Offers)', f: 'Would you like + N / to V …?  |  Shall I + V …?  |  Let me + V …',
        ex: [['Would you like a wake-up call?', 'Quý khách có muốn gọi báo thức không ạ?'], ['Shall I call a taxi for you?', 'Tôi gọi taxi cho quý khách nhé?'], ['Let me help you with your bags.', 'Để tôi giúp quý khách mang hành lý.']] },
    ],
    mistakes: [
      ['Give me your passport.', 'May I see your passport, please?', 'Câu mệnh lệnh trực tiếp nghe như ra lệnh → chuyển sang xin phép.'],
      ['You want coffee?', 'Would you like some coffee?', '"Want" nghe suồng sã; dùng Would you like để mời.'],
      ['Wait!', 'Could you wait a moment, please?', 'Làm mềm câu bằng Could you… please.'],
    ],
    quiz: [
      { q: 'Chọn câu LỊCH SỰ nhất:', o: ['Sign here.', 'You sign here.', 'Could you sign here, please?', 'Must sign here.'], a: 2, e: 'Could you… please là cấu trúc nhờ vả lịch sự.' },
      { q: '___ I take your coat?', o: ['May', 'Do', 'Would', 'Am'], a: 0, e: 'May I + V để xin phép.' },
      { q: 'Would you mind ___ your room number?', o: ['repeat', 'to repeat', 'repeating', 'repeated'], a: 2, e: 'Would you mind + V-ing.' },
      { q: '___ you like a table by the window?', o: ['Do', 'Would', 'Will', 'Shall'], a: 1, e: 'Would you like… dùng để mời.' },
    ],
  },
  {
    id: 'modals-basic', level: 'A',
    title: 'Basic Modal Verbs', titleVi: 'Động từ khuyết thiếu cơ bản: Can, Could, Would, Should',
    intro: 'Động từ khuyết thiếu luôn đi với động từ nguyên mẫu KHÔNG "to" và không chia theo chủ ngữ.',
    sections: [
      { h: 'Công thức chung', f: 'S + modal + V (nguyên mẫu)  |  S + modal + not + V  |  Modal + S + V?', p: ['Không thêm -s: He can (không phải He cans).', 'Không dùng "to": can help (không phải can to help).'] },
      { h: 'CAN – khả năng, cho phép, đề nghị', ex: [['I can help you with that.', 'Tôi có thể giúp quý khách việc đó.'], ['Guests can use the gym for free.', 'Khách được dùng phòng gym miễn phí.']] },
      { h: 'COULD – lịch sự hơn can; khả năng trong quá khứ', ex: [['Could you spell your name, please?', 'Quý khách đánh vần tên giúp tôi được không?'], ["We couldn't find your reservation.", 'Chúng tôi đã không tìm thấy đặt phòng của quý khách.']] },
      { h: 'WOULD – mời, ý muốn lịch sự', ex: [['Would you like to see the menu?', 'Quý khách có muốn xem thực đơn không ạ?'], ["I would recommend the seafood.", 'Tôi xin gợi ý món hải sản.']] },
      { h: 'SHOULD – lời khuyên', ex: [['You should book a table in advance on Fridays.', 'Quý khách nên đặt bàn trước vào thứ Sáu.'], ["You shouldn't leave valuables in the car.", 'Quý khách không nên để đồ quý trong xe.']] },
    ],
    mistakes: [
      ['I can to help you.', 'I can help you.', 'Modal + V nguyên mẫu, không có "to".'],
      ['She cans speak English.', 'She can speak English.', 'Modal không chia theo chủ ngữ.'],
      ['Do you can wait?', 'Can you wait?', 'Đảo modal lên đầu để hỏi, không dùng do/does.'],
    ],
    quiz: [
      { q: 'You ___ try the local coffee. It is excellent!', o: ['should', 'would', 'can to', 'shoulds'], a: 0, e: 'Lời khuyên → should.' },
      { q: '___ you tell me your room number, please?', o: ['Do', 'Could', 'Should', 'Are'], a: 1, e: 'Nhờ vả lịch sự → Could you…?' },
      { q: 'Guests ___ park in the underground garage.', o: ['can', 'cans', 'can to', 'are can'], a: 0, e: 'can + V; không chia, không "to".' },
    ],
  },
  {
    id: 'countable', level: 'A',
    title: 'Countable / Uncountable Nouns & Quantifiers', titleVi: 'Danh từ đếm được / không đếm được & some, any, much, many',
    intro: 'Rất nhiều từ ngành khách sạn là danh từ KHÔNG đếm được: luggage, information, furniture, advice, equipment, money, cutlery, laundry.',
    sections: [
      { h: '1. Phân biệt', p: ['Đếm được: a towel – two towels, a room – rooms, a key – keys.', 'Không đếm được: luggage, information, water, rice, furniture, Wi-Fi… → không thêm -s, không dùng a/an.', 'Muốn đếm: a piece of luggage, a glass of water, a bottle of wine.'],
        ex: [['How many pieces of luggage do you have?', 'Quý khách có bao nhiêu kiện hành lý?'], ['Here is some information about the city.', 'Đây là một số thông tin về thành phố.']] },
      { h: '2. some / any', f: 'some: câu khẳng định & lời mời  |  any: câu phủ định & câu hỏi',
        ex: [['Would you like some tea?', 'Quý khách dùng chút trà nhé?'], ['We don\'t have any rooms left.', 'Chúng tôi không còn phòng nào.'], ['Do you have any allergies?', 'Quý khách có dị ứng gì không?']] },
      { h: '3. much / many / a lot of', f: 'many + N đếm được số nhiều  |  much + N không đếm được  |  a lot of + cả hai',
        ex: [['How many nights will you stay?', 'Quý khách sẽ ở bao nhiêu đêm?'], ['How much luggage do you have?', 'Quý khách có bao nhiêu hành lý?'], ['We have a lot of guests this week.', 'Tuần này chúng tôi có rất nhiều khách.']] },
    ],
    mistakes: [
      ['I have three luggages.', 'I have three pieces of luggage.', 'Luggage không đếm được.'],
      ['Can I have an information?', 'Can I have some information?', 'Information không đếm được → không dùng an, không thêm -s.'],
      ['How much nights?', 'How many nights?', 'Night đếm được → many.'],
    ],
    quiz: [
      { q: 'How ___ towels do you need?', o: ['much', 'many', 'any', 'a'], a: 1, e: 'Towels đếm được số nhiều → many.' },
      { q: 'I\'m sorry, there isn\'t ___ hot water at the moment.', o: ['some', 'many', 'any', 'a'], a: 2, e: 'Câu phủ định → any; water không đếm được.' },
      { q: 'Could you give me some ___ about the tours?', o: ['informations', 'information', 'an information', 'many information'], a: 1, e: 'Information không đếm được.' },
    ],
  },

  // ===================== B1 - B2 =====================
  {
    id: 'advanced-tenses', level: 'B',
    title: 'Present Perfect, Past Continuous & Past Perfect', titleVi: 'Thì nâng cao: Hiện tại hoàn thành, Quá khứ tiếp diễn, Quá khứ hoàn thành',
    intro: 'Ba thì này giúp bạn báo cáo công việc ("Tôi đã xử lý xong…"), kể lại sự cố và giải thích nguyên nhân.',
    sections: [
      { h: '1. Hiện tại hoàn thành (Present Perfect)', f: 'S + have/has + V3/V-ed',
        p: ['Việc vừa xong, có kết quả liên quan đến hiện tại (already, just, yet, ever, since, for).', 'Không đi với mốc thời gian quá khứ xác định (yesterday, last week…).'],
        ex: [['I have already cleaned room 402.', 'Tôi đã dọn xong phòng 402.'], ['The technician has just fixed the air conditioner.', 'Thợ vừa sửa xong máy điều hòa.'], ['Have you ever stayed with us before?', 'Quý khách đã từng ở khách sạn chúng tôi chưa ạ?'], ["I've worked here for three years.", 'Tôi đã làm ở đây được ba năm.']] },
      { h: '2. Quá khứ tiếp diễn (Past Continuous)', f: 'S + was/were + V-ing',
        p: ['Hành động đang diễn ra tại một thời điểm trong quá khứ; thường bị một hành động khác (quá khứ đơn) cắt ngang.'],
        ex: [['The guest was taking a shower when the water stopped.', 'Khách đang tắm thì nước bị ngắt.'], ['At 9 p.m. we were serving a large group.', 'Lúc 9 giờ tối chúng tôi đang phục vụ một đoàn lớn.']] },
      { h: '3. Quá khứ hoàn thành (Past Perfect)', f: 'S + had + V3/V-ed',
        p: ['Hành động xảy ra TRƯỚC một hành động khác trong quá khứ – rất hữu ích khi viết báo cáo sự cố.'],
        ex: [['When the guest arrived, we had already prepared the room.', 'Khi khách đến, chúng tôi đã chuẩn bị phòng xong.'], ['The guest said someone had taken his umbrella.', 'Khách nói ai đó đã lấy mất ô của ông ấy.']] },
    ],
    mistakes: [
      ['I have cleaned the room yesterday.', 'I cleaned the room yesterday.', 'Có "yesterday" → quá khứ đơn.'],
      ['When I arrived, the guest already left.', 'When I arrived, the guest had already left.', 'Việc xảy ra trước trong quá khứ → quá khứ hoàn thành.'],
    ],
    quiz: [
      { q: 'Good news! We ___ your lost passport.', o: ['found', 'have found', 'had found', 'were finding'], a: 1, e: 'Kết quả liên quan hiện tại, không có mốc thời gian → hiện tại hoàn thành.' },
      { q: 'The lights went out while the guests ___ dinner.', o: ['had', 'have had', 'were having', 'had had'], a: 2, e: 'Hành động đang diễn ra bị cắt ngang → quá khứ tiếp diễn.' },
      { q: 'By the time the manager came, the guest ___ .', o: ['left', 'had left', 'has left', 'was leaving'], a: 1, e: 'Xảy ra trước "came" → quá khứ hoàn thành.' },
      { q: 'I ___ at this hotel since 2021.', o: ['work', 'worked', 'have worked', 'had worked'], a: 2, e: '"since" + hiện tại → hiện tại hoàn thành.' },
    ],
  },
  {
    id: 'conditionals', level: 'B',
    title: 'Conditional Sentences (Type 1, 2, 3)', titleVi: 'Câu điều kiện loại 1, 2, 3',
    intro: 'Dùng để đưa ra phương án, giải thích chính sách và nói về tình huống giả định.',
    sections: [
      { h: 'Loại 0 – sự thật / quy định', f: 'If + S + V(hiện tại), S + V(hiện tại)', ex: [['If you lose your key card, we charge a fee of 10 dollars.', 'Nếu quý khách làm mất thẻ phòng, chúng tôi thu phí 10 đô.']] },
      { h: 'Loại 1 – có thể xảy ra ở hiện tại / tương lai', f: 'If + S + V(hiện tại đơn), S + will/can + V',
        ex: [['If a room becomes available, I will call you immediately.', 'Nếu có phòng trống, tôi sẽ gọi cho quý khách ngay.'], ['If you check out after 12, there will be an extra charge.', 'Nếu trả phòng sau 12 giờ sẽ có phụ phí.']] },
      { h: 'Loại 2 – trái thực tế ở hiện tại', f: 'If + S + V2/were, S + would/could + V',
        p: ['"were" dùng cho mọi ngôi trong văn phong chuẩn: If I were you…'],
        ex: [['If I were you, I would take the sunset cruise.', 'Nếu tôi là quý khách, tôi sẽ chọn tour du thuyền ngắm hoàng hôn.'], ['If we had a free room, we would move you right now.', 'Nếu có phòng trống, chúng tôi sẽ chuyển quý khách ngay (nhưng thực tế không có).']] },
      { h: 'Loại 3 – trái thực tế ở quá khứ', f: 'If + S + had + V3, S + would/could have + V3',
        p: ['Dùng để nói về điều đã không xảy ra, tiếc nuối, rút kinh nghiệm.'],
        ex: [['If we had checked the AC earlier, the guest would not have complained.', 'Nếu chúng tôi kiểm tra điều hòa sớm hơn thì khách đã không phàn nàn.']] },
    ],
    mistakes: [
      ['If you will call, I will come.', 'If you call, I will come.', 'Mệnh đề If loại 1 không dùng will.'],
      ['If I was you, I would…', 'If I were you, I would…', 'Văn phong chuẩn dùng "were".'],
    ],
    quiz: [
      { q: 'If you ___ any problems, please call reception.', o: ['will have', 'have', 'had', 'would have'], a: 1, e: 'Loại 1: If + hiện tại đơn.' },
      { q: 'If I ___ the manager, I would give you a refund.', o: ['am', 'was being', 'were', 'had been'], a: 2, e: 'Loại 2: If I were…' },
      { q: 'If the guest had told us earlier, we ___ the problem.', o: ['would fix', 'will fix', 'would have fixed', 'fixed'], a: 2, e: 'Loại 3: would have + V3.' },
    ],
  },
  {
    id: 'passive', level: 'B',
    title: 'Passive Voice', titleVi: 'Câu bị động – báo cáo công việc & giải thích quy trình',
    intro: 'Câu bị động nhấn mạnh việc được làm thay vì ai làm – nghe khách quan, chuyên nghiệp. Rất phổ biến trong thông báo và báo cáo.',
    sections: [
      { h: 'Công thức', f: 'S + be (chia theo thì) + V3/V-ed (+ by O)',
        p: ['Hiện tại đơn: is/are + V3 – Breakfast is served…', 'Quá khứ đơn: was/were + V3 – The room was cleaned…', 'Hiện tại hoàn thành: has/have been + V3 – Your bags have been taken…', 'Tương lai / modal: will be / can be / must be + V3.'] },
      { h: 'Giải thích quy trình & quy định', ex: [['Breakfast is served from 6:30 to 10 a.m.', 'Bữa sáng được phục vụ từ 6:30 đến 10 giờ.'], ['Towels are changed daily.', 'Khăn được thay hằng ngày.'], ['Smoking is not allowed in the rooms.', 'Không được phép hút thuốc trong phòng.']] },
      { h: 'Báo cáo công việc', ex: [['Room 305 has been cleaned and inspected.', 'Phòng 305 đã được dọn và kiểm tra.'], ['The broken lamp was replaced this morning.', 'Chiếc đèn hỏng đã được thay sáng nay.'], ['Your luggage will be delivered to your room.', 'Hành lý sẽ được chuyển lên phòng quý khách.']] },
    ],
    mistakes: [
      ['Breakfast is serve at 7.', 'Breakfast is served at 7.', 'Bị động cần V3/V-ed.'],
      ['The room cleaned yesterday.', 'The room was cleaned yesterday.', 'Thiếu động từ be.'],
    ],
    quiz: [
      { q: 'All rooms ___ every morning.', o: ['clean', 'are cleaned', 'are cleaning', 'cleaned'], a: 1, e: 'Quy trình → hiện tại đơn bị động.' },
      { q: 'The AC in room 210 ___ yesterday.', o: ['was repaired', 'repaired', 'is repaired', 'has repaired'], a: 0, e: '"yesterday" → quá khứ đơn bị động.' },
      { q: 'Your taxi ___ already ___ .', o: ['has / booked', 'has / been booked', 'is / book', 'was / booking'], a: 1, e: 'Hiện tại hoàn thành bị động: has been + V3.' },
    ],
  },
  {
    id: 'relative', level: 'B',
    title: 'Relative Clauses (who, which, that, where)', titleVi: 'Mệnh đề quan hệ',
    intro: 'Nối hai câu ngắn thành một câu dài, bổ sung thông tin cho danh từ – giúp mô tả dịch vụ, phòng ốc, con người rõ ràng hơn.',
    sections: [
      { h: 'Đại từ quan hệ', p: ['who – thay cho người.', 'which – thay cho vật.', 'that – thay cho người hoặc vật (mệnh đề xác định).', 'where – thay cho nơi chốn.', 'whose – sở hữu.'],
        ex: [['The guest who is staying in room 501 wants a late check-out.', 'Vị khách đang ở phòng 501 muốn trả phòng muộn.'], ['This is the restaurant which serves Vietnamese food.', 'Đây là nhà hàng phục vụ món Việt.'], ['The spa where you can get a massage is on the 3rd floor.', 'Spa nơi quý khách có thể mát-xa nằm ở tầng 3.'], ['The guest whose wallet was lost is at the front desk.', 'Vị khách bị mất ví đang ở quầy lễ tân.']] },
      { h: 'Xác định vs Không xác định', p: ['Xác định: cần thiết để biết đang nói về ai/cái gì – không có dấu phẩy, dùng được "that".', 'Không xác định: thông tin thêm – có dấu phẩy, KHÔNG dùng "that".'],
        ex: [['Our head chef, who comes from Hue, prepares the set menu.', 'Bếp trưởng của chúng tôi, người đến từ Huế, chuẩn bị thực đơn set.']] },
    ],
    mistakes: [
      ['The guest which complained…', 'The guest who complained…', 'Người → who.'],
      ['Our pool, that is on the roof, …', 'Our pool, which is on the roof, …', 'Mệnh đề có dấu phẩy không dùng that.'],
    ],
    quiz: [
      { q: 'The waiter ___ served you is called Minh.', o: ['which', 'who', 'where', 'whose'], a: 1, e: 'Người → who.' },
      { q: 'This is the room ___ the famous singer stayed.', o: ['which', 'that', 'where', 'who'], a: 2, e: 'Nơi chốn → where.' },
      { q: 'The dish ___ I recommend is the grilled fish.', o: ['who', 'that', 'where', 'whose'], a: 1, e: 'Vật, mệnh đề xác định → that/which.' },
    ],
  },
  {
    id: 'reported', level: 'B',
    title: 'Reported Speech', titleVi: 'Câu tường thuật – thuật lại yêu cầu / phàn nàn của khách',
    intro: 'Khi bàn giao ca hoặc báo cáo quản lý, bạn cần thuật lại lời khách. Quy tắc chính: lùi thì, đổi đại từ và trạng từ.',
    sections: [
      { h: '1. Lùi thì', p: ['Hiện tại đơn → Quá khứ đơn', 'Hiện tại tiếp diễn → Quá khứ tiếp diễn', 'Quá khứ đơn / Hiện tại hoàn thành → Quá khứ hoàn thành', 'will → would; can → could', 'Trạng từ: now → then; today → that day; tomorrow → the next day; here → there'] },
      { h: '2. Câu kể', f: 'S + said (that) + S + V(lùi thì)', ex: [['"The room is too noisy." → The guest said (that) the room was too noisy.', 'Khách nói phòng quá ồn.']] },
      { h: '3. Câu hỏi', f: 'S + asked + (if/whether | Wh-) + S + V(lùi thì)', ex: [['"Can I check out late?" → She asked if she could check out late.', 'Cô ấy hỏi liệu có thể trả phòng muộn không.'], ['"Where is the gym?" → He asked where the gym was.', 'Ông ấy hỏi phòng gym ở đâu.']] },
      { h: '4. Yêu cầu / mệnh lệnh', f: 'S + asked/told + O + (not) to V', ex: [['"Please change my towels." → The guest asked us to change her towels.', 'Khách yêu cầu chúng tôi thay khăn.'], ['"Don\'t clean the room today." → He asked us not to clean the room that day.', 'Ông ấy yêu cầu hôm đó không dọn phòng.']] },
    ],
    mistakes: [
      ['He asked where is the gym.', 'He asked where the gym was.', 'Câu hỏi tường thuật không đảo ngữ và phải lùi thì.'],
      ['She told that the AC was broken.', 'She said that the AC was broken. / She told me that…', 'tell phải có tân ngữ.'],
    ],
    quiz: [
      { q: '"I will arrive late." → The guest said he ___ late.', o: ['will arrive', 'would arrive', 'arrives', 'arrived'], a: 1, e: 'will → would.' },
      { q: '"Is breakfast included?" → She asked ___ breakfast was included.', o: ['that', 'if', 'what', 'did'], a: 1, e: 'Câu hỏi Yes/No → if/whether.' },
      { q: '"Please call me a taxi." → He asked me ___ him a taxi.', o: ['call', 'calling', 'to call', 'called'], a: 2, e: 'asked + O + to V.' },
    ],
  },

  // ===================== C1 =====================
  {
    id: 'inversion', level: 'C',
    title: 'Inversion & Emphatic Structures', titleVi: 'Đảo ngữ & Cấu trúc nhấn mạnh',
    intro: 'Đảo ngữ tạo văn phong trang trọng, nhấn mạnh – thường gặp trong thư xin lỗi, thông báo và bài phát biểu.',
    sections: [
      { h: '1. Đảo ngữ với trạng từ phủ định', f: 'Never / Rarely / Seldom / Not only / Under no circumstances + trợ động từ + S + V',
        ex: [['Never have we received such a complaint before.', 'Chưa bao giờ chúng tôi nhận phàn nàn như vậy.'], ['Not only will we refund the night, but we will also upgrade your room.', 'Chúng tôi không chỉ hoàn tiền đêm đó mà còn nâng hạng phòng cho quý khách.'], ['Under no circumstances should staff enter a room with a "Do Not Disturb" sign.', 'Trong bất kỳ trường hợp nào nhân viên cũng không được vào phòng treo biển "Xin đừng làm phiền".']] },
      { h: '2. Only after / Only when / No sooner … than / Hardly … when', ex: [['Only after the inspection is completed can the room be released.', 'Chỉ sau khi kiểm tra xong, phòng mới được mở bán.'], ['No sooner had the guest arrived than the power went out.', 'Khách vừa đến thì mất điện.']] },
      { h: '3. Câu chẻ nhấn mạnh (Cleft sentences)', f: 'It is/was + X + that/who …  |  What + S + V + is/was …',
        ex: [['It was the night manager who solved the problem.', 'Chính quản lý ca đêm là người đã giải quyết vấn đề.'], ['What our guests appreciate most is the friendly service.', 'Điều khách hàng đánh giá cao nhất là sự phục vụ thân thiện.']] },
      { h: '4. Trợ động từ nhấn mạnh', f: 'S + do/does/did + V', ex: [['We do apologize for the inconvenience.', 'Chúng tôi thực sự xin lỗi vì sự bất tiện.']] },
    ],
    mistakes: [
      ['Never we have seen…', 'Never have we seen…', 'Sau trạng từ phủ định đầu câu phải đảo trợ động từ lên trước chủ ngữ.'],
      ['Not only we refund…', 'Not only do we refund…', 'Cần trợ động từ do/does/did khi không có sẵn.'],
    ],
    quiz: [
      { q: 'Rarely ___ such a beautiful view from a city hotel.', o: ['you see', 'do you see', 'you do see', 'see you'], a: 1, e: 'Rarely + trợ động từ + S + V.' },
      { q: 'Not only ___ the breakfast free, but it is also delicious.', o: ['is', 'it is', 'does', 'was it'], a: 0, e: 'Not only + be + S.' },
      { q: '___ was the concierge who found your passport.', o: ['That', 'It', 'What', 'There'], a: 1, e: 'Câu chẻ: It was … who …' },
    ],
  },
  {
    id: 'subjunctive', level: 'C',
    title: 'Subjunctive Mood', titleVi: 'Giả định cách (Subjunctive)',
    intro: 'Dùng để diễn đạt yêu cầu, đề xuất, mong ước một cách trang trọng – thường gặp trong quy định nội bộ và thư từ chuyên nghiệp.',
    sections: [
      { h: '1. Sau động từ đề nghị / yêu cầu', f: 'S + suggest/recommend/insist/request/require + (that) + S + V (nguyên mẫu)',
        p: ['Động từ trong mệnh đề "that" giữ nguyên mẫu với mọi chủ ngữ (không thêm -s, không chia thì).'],
        ex: [['The manager insists that every guest be greeted with a smile.', 'Quản lý yêu cầu mọi vị khách đều được chào đón bằng nụ cười.'], ['We recommend that he book the tour in advance.', 'Chúng tôi đề nghị ông ấy đặt tour trước.']] },
      { h: '2. Sau tính từ quan trọng / cần thiết', f: 'It is essential/vital/important/necessary + that + S + V (nguyên mẫu)',
        ex: [['It is essential that the minibar be checked before check-out.', 'Việc kiểm tra minibar trước khi trả phòng là điều bắt buộc.']] },
      { h: '3. Wish / If only / It\'s (high) time / Would rather', f: 'S + wish + S + V2/were (hiện tại) | had V3 (quá khứ)  |  It\'s time + S + V2',
        ex: [['I wish we had more rooms available tonight.', 'Ước gì tối nay chúng tôi còn nhiều phòng hơn.'], ["It's time we updated the booking system.", 'Đã đến lúc chúng ta cập nhật hệ thống đặt phòng.'], ["I'd rather you didn't smoke on the balcony.", 'Tôi mong quý khách không hút thuốc ở ban công.']] },
    ],
    mistakes: [
      ['I suggest that he books early.', 'I suggest that he book early.', 'Giả định cách dùng V nguyên mẫu.'],
      ['It is vital that the guest is informed.', 'It is vital that the guest be informed.', 'Văn phong trang trọng dùng "be".'],
    ],
    quiz: [
      { q: 'The hotel requires that each guest ___ a valid ID.', o: ['shows', 'show', 'showed', 'showing'], a: 1, e: 'require that + S + V nguyên mẫu.' },
      { q: 'It is important that the room ___ cleaned before 2 p.m.', o: ['is', 'was', 'be', 'being'], a: 2, e: 'It is important that + S + be.' },
      { q: "It's high time we ___ the menu.", o: ['change', 'changed', 'have changed', 'will change'], a: 1, e: "It's time + S + V2." },
    ],
  },
  {
    id: 'reduction', level: 'C',
    title: 'Reduced Clauses & Reduced Conditionals', titleVi: 'Rút gọn mệnh đề & Rút gọn câu điều kiện',
    intro: 'Rút gọn giúp câu gọn, tự nhiên và chuyên nghiệp hơn – đặc biệt trong email, thông báo và mô tả dịch vụ.',
    sections: [
      { h: '1. Rút gọn mệnh đề quan hệ', f: 'Chủ động → V-ing  |  Bị động → V3  |  to V (sau the first/only/last…)',
        ex: [['Guests who stay more than 5 nights → Guests staying more than 5 nights get a free dinner.', 'Khách ở hơn 5 đêm được tặng bữa tối.'], ['The room which was booked online → The room booked online is ready.', 'Phòng đặt qua mạng đã sẵn sàng.'], ['She was the first employee to receive the award.', 'Cô ấy là nhân viên đầu tiên nhận giải.']] },
      { h: '2. Rút gọn mệnh đề trạng ngữ (cùng chủ ngữ)', f: 'After/Before/While/When + V-ing  |  Having + V3  |  V3 (bị động)',
        ex: [['After checking the bill, please sign here.', 'Sau khi kiểm tra hóa đơn, quý khách vui lòng ký vào đây.'], ['Having finished the inspection, the supervisor released the room.', 'Kiểm tra xong, giám sát mở bán phòng.'], ['Located in the city centre, the hotel is close to all attractions.', 'Nằm ở trung tâm, khách sạn gần mọi điểm tham quan.']] },
      { h: '3. Rút gọn câu điều kiện (đảo ngữ, bỏ If)', f: 'Loại 1: Should + S + V  |  Loại 2: Were + S + to V / Were + S …  |  Loại 3: Had + S + V3',
        ex: [['Should you need anything, please call extension 0.', 'Nếu quý khách cần gì, vui lòng gọi số máy lẻ 0.'], ['Were I in your position, I would feel the same.', 'Nếu tôi ở vị trí của quý khách, tôi cũng sẽ cảm thấy như vậy.'], ['Had we known about your allergy, we would have prepared a different dish.', 'Nếu biết quý khách bị dị ứng, chúng tôi đã chuẩn bị món khác.']] },
      { h: '4. Các dạng rút gọn khác', p: ['If necessary / If possible / If so / If not', 'Unless otherwise stated…', 'Otherwise / Provided that / As long as'],
        ex: [['If possible, we will prepare the room before noon.', 'Nếu có thể, chúng tôi sẽ chuẩn bị phòng trước buổi trưa.']] },
    ],
    mistakes: [
      ['Should you will need help…', 'Should you need help…', 'Sau Should + S dùng V nguyên mẫu.'],
      ['After clean the room, …', 'After cleaning the room, …', 'Sau giới từ dùng V-ing.'],
      ['Walking into the lobby, the chandelier impressed me.', 'Walking into the lobby, I was impressed by the chandelier.', 'Rút gọn chỉ khi hai mệnh đề cùng chủ ngữ.'],
    ],
    quiz: [
      { q: '___ you have any questions, please do not hesitate to contact us.', o: ['If', 'Should', 'Had', 'Were'], a: 1, e: 'Rút gọn loại 1: Should + S + V.' },
      { q: '___ we received your email earlier, we would have reserved the table.', o: ['Had', 'Should', 'Were', 'If'], a: 0, e: 'Rút gọn loại 3: Had + S + V3.' },
      { q: 'The guests ___ in the garden were very loud.', o: ['sat', 'sitting', 'who sitting', 'to sit'], a: 1, e: 'Rút gọn mệnh đề quan hệ chủ động → V-ing.' },
    ],
  },
];
