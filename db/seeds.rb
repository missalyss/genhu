employee_list = [
  ["Van", "Evans", "Van is the founder of Generations Humanitarian. He...", "President", "van@genhu.org", "801-906-3107", "director"]
  

employee_list.each do |first_name, last_name, bio, title, email, phone, other, role|
  Employee.create( first_name: first_name, last_name: last_name, bio: bio, title: title, email: email, phone: phone, role: role)
end

puts "Data Seeded"

