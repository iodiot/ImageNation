class User < ActiveRecord::Base
  has_attached_file :image,
                    :styles => {:thumb => '128x128#'},
                    :storage => :s3,
                    :s3_credentials => "#{RAILS_ROOT}/config/s3.yml",
                    :path => '/:style/:login_:token.:extension'

	def self.random_token(length)
		chars = ('a'..'z').to_a + ('0'..'9').to_a + ('A'..'Z').to_a

		token = ''
		(1..length).each do
			token << chars[rand(chars.size - 1)]
		end

		return token
	end

  def self.random_login
    login = ''

    consonant = 'qwrtpsdfghjklzxcvbnm'.split('').to_a
    vowel = 'eyuioa'.split('').to_a
    (1..3).each do
      login << consonant[rand(consonant.size - 1)]
      login << vowel[rand(vowel.size - 1)]
    end

    digits = ('0'..'9').to_a
    (1..2).each { login << digits[rand(digits.size - 1)] }

    return login
  end
end

