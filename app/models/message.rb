class Message < ActiveRecord::Base

  validates :content, presence: true, length: { maximum: 140 }
  validates :author, presence: true, length: { maximum: 25 }
  validates :url, format: { with: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/, message: "a valid url is required" }



end
